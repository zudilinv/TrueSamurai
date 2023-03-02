import React from "react";
import s from "./Friends.module.css"

export const Friends = () => {
    return (
        <div>
            <div className={s.item}>
                <a>Friends :</a>
            </div>
            <div className={s.itemItem}>
                <div className={s.itemItemI}></div>
                <div className={s.itemItemI}></div>
                <div className={s.itemItemI}></div>
            </div>

        </div>

    );
};

