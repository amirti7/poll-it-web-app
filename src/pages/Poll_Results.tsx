import { PieChart } from "react-minimal-pie-chart";
import styled from "styled-components";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

interface Props {}

const Title = styled.p`
  font-size: 70px;
  text-align: center;

  @media (max-width: 460px) {
    font-size: 65px;
  }
`;

interface Question {
  poll_question: string;
  poll_question_id: string;
}

interface Answer {
  answer: string;
  poll_question_id: string;
}
const AboutUs: React.FC<Props> = (props) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const db = getFirestore();

  let choices;
  let dataForChart;
  const colRef = collection(db, "answers");
  const colRef2 = collection(db, "polls_questions");

  useEffect(() => {
    getDocs(colRef)
      .then((snapshot) => {
        const formattedSnapshots = snapshot.docs.map((doc) => {
          const obj = {
            answer: doc.get("answer"),
            poll_question_id: doc.get("poll_question_id"),
          };
          return obj;
        });
        setAnswers(formattedSnapshots);
      })
      .catch((err) => {
        console.log("err", err);
      });

    getDocs(colRef2)
      .then((snapshot) => {
        const formattedSnapshots = snapshot.docs.map((doc) => {
          const obj = {
            poll_question: doc.get("poll_question"),
            poll_question_id: doc.get("poll_question_id"),
          };
          return obj;
        });
        setQuestions(formattedSnapshots);
      })
      .catch((err: any) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div>
      <Container>
        <Title>Polls Analyze</Title>
        {questions.map((obj) => {
          {
            choices = answers.filter(
              (ans) => obj.poll_question_id == ans.poll_question_id
            );
            // dataForChart=choices.map((choice)=>{
            //   const pieData={
            //     title:choice.answer,
            //     value:

            //   }

            // });
          }
          return (
            <Row md={6} key={obj.poll_question_id}>
              <Col md={6}>
                <p
                  style={{
                    fontSize: "40px",
                  }}
                >
                  {obj.poll_question}
                </p>
              </Col>
              <Col md={6}>
                <PieChart
                  radius={30}
                  label={({ dataEntry }) => dataEntry.value}
                  data={[
                    { title: "One", value: 10, color: "#E38627" },
                    { title: "Two", value: 15, color: "#C13C37" },
                    { title: "Three", value: 20, color: "#6A2135" },
                  ]}
                />
              </Col>
            </Row>
          );
        })}
      </Container>
    </div>
  );
};

export default AboutUs;
