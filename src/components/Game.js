import React from "react";
import { Link } from "react-router-dom";
import { smallImage } from "../util";

//Styling and Motion
import styled from "styled-components";
import { motion } from "framer-motion";

//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

const Game = ({ name, released, image, id }) => {
	const stringPathId = id.toString();
	//Load Detail
	const dispatch = useDispatch();
	const loadDetailHandler = () => {
		document.body.style.overflow = "hidden";
		dispatch(loadDetail(id));
	};
	return (
		<StyledGame onClick={loadDetailHandler} layoutId={stringPathId}>
			<Link to={`/games/${id}`}>
				<motion.h3 layoutId={`title ${id}`}>{name}</motion.h3>
				<p>{released}</p>
				<motion.img
					layoutId={`image ${stringPathId}`}
					src={smallImage(image, 640)}
					alt={name}
				/>
			</Link>
		</StyledGame>
	);
};

const StyledGame = styled(motion.div)`
	min-height: 30vh;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	cursor: pointer;
	overflow: hidden;
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
`;

export default Game;
