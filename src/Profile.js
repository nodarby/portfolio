import React from 'react';
import './Common.css';




function Profile() {
    return (
        <div className="App">
            <h2 className="main">Personal Information</h2>
            <div className="main">
                <div className="eng">Name</div>：<div className="jap">野田 朋宏</div>
            </div>
            <div className="main">
                <div className="eng">Birthday</div>：<div className="jap">1998/10/5</div>
            </div>
            <div className="main">
                <div className="eng">University</div>：<div className="jap">名古屋大学 情報学部</div>
            </div>
            <h2 className="main">Career</h2>
            <div className="main">
                <div className="jap">2017年3月　　愛知県立明和高等学校卒業</div>
            </div>
        </div>
    );
}

export default Profile;