import chefClaudeLogo from 'D:/React/chef-claude/src/assets/chef-claude-icon.png'
export default function Header(){
    return (
        <header>
        <img src={chefClaudeLogo} alt="" onMouseLeave={()=>{
            alert("chef claude is waiting for you");
        }} />
        <h1>Chef Claude</h1>
        </header>
    )
}