import React from 'react';

const HirePlayer = (props) => {
    const hirePlayer = props.hirePlayer;
    // console.log(hirePlayer);
    const total = hirePlayer.reduce((total, pl) => total + pl.salary, 0)

    return (
        <div className="">
    <h2>Added Plyer</h2>
            <h4>Selected Player : {hirePlayer.length}</h4>
            <h4 className="totalsalary">Total Amount : $ {total}</h4>
            <hr/>
            {
                hirePlayer.map(player =>{
                    <img src={player.image} alt=""/>
                    return(
                        <div>
                        
                         
                            <h4>{player.name}</h4>
                            <h4>Salary:$ {player.salary}</h4>

                        </div>
                    )
                })
            }
            {/* <h4 className="totalsalary">Total : {total}</h4> */}
        </div>
    );
};

export default HirePlayer;