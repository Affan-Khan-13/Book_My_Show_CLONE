import React from "react";
import Poster from '../components/Poster/poster.component';
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component.js";
const Plays = () => {
return (
<>
<div className="container mx-auto px-4">
   <div className="w-full lg:flex lg:flex-row-reverse">
      <div className="lg:w-8/12">
      <h2 className="text-2xl font-bold mb-4">Plays in Hyderabad</h2>
      <div className="flex flex-wrap">
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               image="https://images.unsplash.com/photo-1612196808827-9ff25cb6137a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxlY0VDQ1JMbUNNY3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               image="https://images.unsplash.com/photo-1612196808827-9ff25cb6137a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxlY0VDQ1JMbUNNY3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               image="https://images.unsplash.com/photo-1612196808827-9ff25cb6137a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxlY0VDQ1JMbUNNY3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               image="https://images.unsplash.com/photo-1612196808827-9ff25cb6137a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxlY0VDQ1JMbUNNY3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               image="https://images.unsplash.com/photo-1612196808827-9ff25cb6137a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxlY0VDQ1JMbUNNY3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               image="https://images.unsplash.com/photo-1612196808827-9ff25cb6137a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxlY0VDQ1JMbUNNY3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               image="https://images.unsplash.com/photo-1612196808827-9ff25cb6137a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxlY0VDQ1JMbUNNY3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               image="https://images.unsplash.com/photo-1612196808827-9ff25cb6137a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxlY0VDQ1JMbUNNY3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300"
               />
         </div>
      </div>
      </div>

       <div className="lg:w-1/4">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>
        <div>
        <PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]}/>
        <PlaysFilter title="Language" tags={["Tamil", "Kannada"]}/>
        <PlaysFilter title="Categories" tags={["Theatre"]}/>
        </div>
       </div>
   </div>
</div>
</>
)
};
export default Plays;