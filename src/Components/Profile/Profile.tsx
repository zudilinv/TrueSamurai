import React from "react";
import s from './Profile.module.css';
import {MyPosts} from './My posts/MyPosts';


export const Profile = () => {
    return <div>
        <div>
            <img className={s.img1}
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JCtVkkH1Uo_Ue_V4hpUmyN-WZpcvUxxR6Q&usqp=CAU" />
        </div>
        <div className={s.description}>
            <img className={s.img2}
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYWoQIj4S37bMrdOk66DzLfO5CBmemLpNpg&usqp=CAU" />
            Descriptions
        </div>
        <MyPosts/>
    </div>
}