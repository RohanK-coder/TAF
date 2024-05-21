import React, { useState } from 'react'
import { Checkbox } from "@material-tailwind/react";
import { Radio } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { AppContext } from './AppContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


export default function DoshaQuiz() {
    
    
    const {vatascore,SetVataScore} = useContext(AppContext)
    const {pittascore,SetPittaScore} = useContext(AppContext)
    const {kaphascore,SetKaphaScore} = useContext(AppContext)
    const navigate = useNavigate();
    
    const handleSubmit = () => {
        if(vatascore>kaphascore && vatascore>pittascore){
            navigate('/vatapage')
        }
        else if(pittascore>vatascore && pittascore>kaphascore){
            navigate('/pittapage')
        }
        else{
            navigate('/kaphapage')
        }
    }
   
    const vataQuestions = [
        {
            question:"My skin tends to be dry and rough.",
            name:"one",
        },
        {
            question:"I frequently experience digestive issues such as gas and bloating. ",
            name:"two",
        },
        {
            question:"My energy levels are inconsistent; I often have bursts of energy followed by periods of fatigue. ",
            name:"three",
        },
        {
            question:"I have difficulty falling asleep and often wake up in the middle of the night. ",
            name:"four",
        },
        {
            question:"My mind is very active, and I tend to overthink and worry. ",
            name:"five",
        },
        {
            question:"I prefer warm and humid environments over cold and dry ones. ",
            name:"six",
        },
        {
            question:"I am naturally creative and enjoy starting new projects, but I sometimes struggle to complete them. ",
            name:"seven",
        },
        {
            question:"I have a slender or thin body frame and find it challenging to gain weight. ",
            name:"eight",
        },
        {
            question:"I tend to have a variable appetite, sometimes feeling very hungry and other times not wanting to eat much at all. ",
            name:"nine",
        },
        
        
    ]
    const pittaQuestions = [
        {
            question: "I often find myself seeking out spicy and flavorful foods.",
            name:"one",
        },
        {
            question: "My hair has a tendency to thin or turn gray prematurely.",
            name:"two",
        },
        {
            question: "I am known for my strong opinions and often take a leadership role in group settings.",
            name:"three",
        },
        {
            question: "I tend to perspire easily, even in cooler temperatures.",
            name:"four",
        },
        {
            question: "I have a keen sense of organization and can quickly identify inefficiencies.",
            name:"five",
        },
        {
            question: "I become impatient when waiting in lines or dealing with delays.",
            name:"six",
        },
        {
            question: "I am naturally ambitious and driven, often setting high goals for myself.",
            name:"seven",
        },
        {
            question: "My skin is prone to moles and freckles, and I sunburn easily.",
            name:"eight",
        },
        {
            question: "I enjoy challenges and often seek out competitive activities.",
            name:"nine",
        },
        
    ]
    const kaphaQuestions = [
        {
            question:"I tend to move slowly and deliberately, avoiding rushed actions.",
            name:"one",
        },
        {
            question:"I often feel a sense of heaviness or lethargy, especially in the mornings.",
            name:"two",
        },
        {
            question:"My skin is naturally well-moisturized and has a soft, supple texture.",
            name:"three",
        },
        {
            question:"I find it challenging to stay motivated for intense physical activity or exercise.",
            name:"four",
        },
        {
            question:"I have a deep, resonant voice that is often soothing to others.",
            name:"five",
        },
        {
            question:"I am naturally nurturing and enjoy taking care of others.",
            name:"six",
        },
        {
            question:"I rarely experience strong emotions, maintaining a steady and balanced emotional state.",
            name:"seven",
        },
        {
            question:"I have thick, lustrous hair that grows slowly.I am very resistant to illnesses and have a strong immune system.",
            name:"eight",
        },
        {
            question:"I prefer a slower pace in life, enjoying activities like reading, cooking, or spending time in nature.",
            name:"nine",
        },
        
    ]
    const vataMapped = vataQuestions.map(item => {
        return <li className='flex flex-col items-center justify-center'>
            <h1 className='text-2xl text-lime-200 mb-4 opacity-50'>{item.question}</h1>
            <div className="flex gap-10">
                <p>Agree</p>
                <Radio name={item.name} color='green' onChange={()=>SetVataScore(vatascore+5)}/>
                <Radio name={item.name} color="gray" onChange={()=>SetVataScore(vatascore+4)}/>
                <Radio name={item.name} color="blue" onChange={()=>SetVataScore(vatascore+3)}/>
                <Radio name={item.name} color="yellow" onChange={()=>SetVataScore(vatascore+2)}/>
                <Radio name={item.name} color="red" onChange={()=>SetVataScore(vatascore+1)}/>
                <p>Disagree</p>
            </div>
        </li>
    })
    const pittaMapped = pittaQuestions.map(item => {
        return <li className='flex flex-col items-center justify-center'>
            <h1 className='text-2xl text-lime-200 mb-4 opacity-50'>{item.question}</h1>
            <div className="flex gap-10">
                <p>Agree</p>
                <Radio name={item.name} color='green' onChange={()=>SetPittaScore(pittascore+5)}/>
                <Radio name={item.name} color="gray" onChange={()=>SetPittaScore(pittascore+4)}/>
                <Radio name={item.name} color="blue" onChange={()=>SetPittaScore(pittascore+3)}/>
                <Radio name={item.name} color="yellow" onChange={()=>SetPittaScore(pittascore+2)}/>
                
                <Radio name={item.name} color="red" onChange={()=>SetPittaScore(pittascore+1)}/>
                <p>Disagree</p>
            </div>
        </li>
    })
    const kaphaMapped = kaphaQuestions.map(item => {
        return <li className='flex flex-col items-center justify-center'>
            <h1 className='text-2xl text-orange-800 mb-4 opacity-50'>{item.question}</h1>
            <div className="flex gap-10">
                <p>Agree</p>
                <Radio name={item.name} color='green' onChange={()=>SetKaphaScore(kaphascore+5)}/>
                <Radio name={item.name} color="gray"  onChange={()=>SetKaphaScore(kaphascore+4)}/>
                <Radio name={item.name} color="blue"  onChange={()=>SetKaphaScore(kaphascore+3)}/>
                <Radio name={item.name} color="yellow"  onChange={()=>SetKaphaScore(kaphascore+2)}/>
                
                <Radio name={item.name} color="red"  onChange={()=>SetKaphaScore(kaphascore+1)}/>
                <p>Disagree</p>
            </div>
        </li>
    })
  return (
    <>
    <div className='doshaQuiz'>
        <div className='vata'>
        <h1 className='text-white'>Know Your Vata</h1>
        <ul className='flex items-center justify-center flex-col gap-24 mb-20'>
            {vataMapped}
        </ul>
        <h1 className='text-white bg-yellow-900 p-5'>Know Your Pitta</h1>
        <ul className='flex items-center justify-center flex-col gap-24 mb-20 p-10 bg-yellow-900 w-full'>
            {pittaMapped}
        </ul>
        <h1 className='text-orange-800 bg-gray-300 p-5'>Know Your Kapha</h1>
        <ul className='flex items-center justify-center flex-col gap-24 mb-5 p-10 bg-gray-300 w-full'>
            {kaphaMapped}
        </ul>
        <Button variant="gradient" className="rounded-full mb-5" onClick={handleSubmit}>
        Submit Quiz
      </Button>
        </div>
    </div>
    </>
  )
}
