import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import ReviewsList from "../components/ReviewsList";
import {FaStar} from "react-icons/fa";

const colors ={
	orange:"#FFBA5A",
	grey : "#a9a9a9"
};

const styles={
	container:{
		display:"flex",
		flexDirection:"column",
		alignItems: "center",
		marginTop: "70px",
	},
	textarea:{
		border:"1px solid #a9a9a9",
		borderRadius: '5px',
		width: '300',
		margin:"20px 0",
		minHeight: '100px',
		padding: '10px',
		fontSize: '17px'
	},
	button:{
		border:"1px solid transparent",
		borderRadius: '5px',
		width: '150px',
		padding: '10px 20px',
		cursor: 'pointer',
		backgroundColor: '#FF2625',
		fontSize: '16px'
	}
};


function Review({ user }) {
	const [currentValue , setCurrentValue]= useState(null);
	const [hoverValue , setHoverValue] = useState(undefined);
	const [reviews, setReviews] = useState([]);
	const reviewRef = useRef('');

	console.log(reviews);

	useEffect(() => {
		const heplFunc = async () => {
			try {
				const requestOptions = {
						headers: { 
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${user.token}`
						},
					};
			
				const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/reviews`, requestOptions);
				if(res.data) {
					setReviews(res.data);
				}
			} catch(error) {
				const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
				toast.error(message);
			}
		}
		heplFunc();
	}, [])
	

	const stars = Array(5).fill(0);
	const handleClick = value =>{
		setCurrentValue(value)
	};

	const handleMouseOver=newHoverValue=>{
		setHoverValue(newHoverValue)
	};

	const handleMouseLeave=()=>{
		setHoverValue(undefined)
	}

	const onSubmit = async (e) => {
		// e.preventDefault();
		const reviewData = {
			rating: currentValue,
			review: (reviewRef.current.value !== '') ? reviewRef.current.value : "No review",
		}

		console.log(reviewData);

		try {
            const requestOptions = {
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${user.token}`
                    },
                };
        
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/reviews`, JSON.stringify(reviewData), requestOptions);

			// console.log(res.data);
            if(res.data) {
				setReviews(res.data);
                toast.success('Review Added😊');
				setCurrentValue(0);
				setHoverValue(0);
				reviewRef.current.value = '';
            }
        } catch(error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            toast.error(message);
        }
	};


return (
	<>
	<div style={styles.container}>
		<h2>Rate Us 😍</h2>
		<div style={styles.stars}>
			{stars.map((_,index) =>{
				return(
					<FaStar
						key={index} size={28}
						onClick={()=> handleClick(index+1)}
						onMouseOver={() => handleMouseOver(index+1)}
						onMouseLeave={handleMouseLeave}
						color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
						style={{
							marginRight : 10,
							cursor : "pointer"
						}}
					/>         
				)}
			)}
		</div>

		<textarea placeholder="What's your feedback?" style={styles.textarea} rows='5' cols='50' ref={reviewRef}/>
		<button className="btn" style={styles.button} onClick={onSubmit}> Submit </button>
	</div>

	<div className='review-container'>
		{(reviews?.length > 0) && 
		<ul>
			<h1 className="heading" style={{fontSize: '24px'}}>Reviews posted by other users</h1>
			{reviews.map((review) => <ReviewsList review={review} key={review.id} />)}
		</ul>
		}
	</div>
	</>
);
}


export default Review;