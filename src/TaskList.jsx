import { Card } from "@heroui/react";
import Container from "./Container";
import Task from "./Task";

export default function TaskList({children}){
    return(
        <Container title="My Tasks">
            {children}
        </Container>
    )
}