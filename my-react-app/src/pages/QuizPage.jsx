import React, { useEffect, useState } from "react";
import axios from "axios";
import { 
    Box,
    Grid,
} from "@mui/material";
import QuizItem from "../components/QuizItem";


export default function UsersList() {

    let [courses, setCourses] = useState([]);
    useEffect(() => {
        (async () => {
            const { data } = await axios.get("https://63f9f88abeec322c57eae484.mockapi.io/Courses");
            setCourses(data);
        })();
    }, []);

  return (
    <Box sx={{ 
        flexGrow: 1,
    }}>
      <Grid container 
        spacing={1}
        sx={{ 
            minHeight: '100vh',
            paddingTop: '150px',
            justifyContent: 'center',
            backgroundColor: '#1C0772',
            
        }}>
        {courses.map((course, index) => (
                <QuizItem 
                    item xs={8} md={4}
                    key={index}
                    course={course.course}
                    descr={course.description}
                    img={course.avatar}
                    id={index}
                    margin='20px'
                />
            ))} 
      </Grid>
    </Box>
  );
}