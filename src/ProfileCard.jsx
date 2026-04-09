export const ProfileCard=({name,role,image})=>{
    return (
<div className="card">
    <img src={image} alt={name} width="90"/>
    <h2>{name}</h2>
    <p>{role}</p>
</div>
    );
};