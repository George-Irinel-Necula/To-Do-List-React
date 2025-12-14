import { Button, Card, Input, Textarea } from "@heroui/react";
import { IconPlus } from '@tabler/icons-react';
import Container from "./Container";
import { useEffect, useState } from "react";

export default function AddTask({addTask,editMode,editedTask,editTask}){

    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")

    useEffect(()=>{
        if(editedTask.id!=null){
        setTitle(editedTask.title)
        setDescription(editedTask.description)}
    },[editedTask])

    return (
        <Container title="Add New Task">
            <Input label="Task Title" value={title} onChange={(e)=>setTitle(e.target.value)} labelPlacement="outside-top" placeholder="Task Title"></Input>
            <Textarea label="Description" value={description} onChange={(e)=>setDescription(e.target.value)} labelPlacement="outside" placeholder="Enter your description" />
            <Button color="secondary" onClick={
                ()=>{(editMode?editTask(editedTask.id,title,description):addTask(title,description)),
                    setTitle(""),
                    setDescription("")}
                } startContent={<IconPlus size={20} stroke={2}/>} isDisabled={title=="" || title==null || description=="" || description==null?true:false}>{editMode?"Edit Task":"Add Task"}</Button>
        </Container>        
    )
}