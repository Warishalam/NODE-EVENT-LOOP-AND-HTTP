const express=require('express');

const app=express();
app.listen(3000);

const books={
    "Clean-Code":"Programming is about polishing the craft with years of trial and error. I wish there was a way to save yourself from all the hard work by learning from the mistakes of other programmers?",
    "Atomic Habits":"Atomic Habits offers a proven framework for improving every day. James Clear reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviours that lead to remarkable results.",
    " Deep Work":"The title may be confusing but deep work is simply the “ability to focus without distraction on a cognitively demanding task”.",
    "Eat That Frog!":"There’s an old saying: if you eat a live frog first thing each morning, you’ll have the satisfaction of knowing that it’s probably the worst thing you’ll do all day."
}
app.get('/',(res,req)=>{
    res.send("hello");
})
app.get('/books', (req, res) => {
    res.send(books);
});