import { Button, Card, Input, Textarea } from "@heroui/react";
import { IconPlus } from '@tabler/icons-react';
import Container from "./Container";
import { useEffect, useState } from "react";

export default function AddTask({addTask}){

    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")

    return (
        <Container title="Add New Task">
            <Input label="Task Title" value={title} onChange={(e)=>setTitle(e.target.value)} labelPlacement="outside-top" placeholder="Task Title"></Input>
            <Textarea label="Description" value={description} onChange={(e)=>setDescription(e.target.value)} labelPlacement="outside" placeholder="Enter your description" />
            <Button color="secondary" onClick={()=>{addTask(title,description),setTitle(""),setDescription("")}} startContent={<IconPlus size={20} stroke={2}/>} isDisabled={title=="" || title==null || description=="" || description==null?true:false}>Add Task</Button>
        </Container>        
    )
}