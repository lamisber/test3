
import './btn.css';
interface buttonProps {
  text: string;
  className?: string;
  onClick: () => void;
  disable?:boolean;
    variant?: 'primary' | 'secondary' | 'danger';


}
const Button = ({ text, className, onClick, disable, variant }: buttonProps) => {
return(


    <button 
    className  ={`btn btn-${variant}`}
     onClick={onClick}
      disabled={disable}
      
      >
        
{text}
</button>
)

}
export default Button