import {Link} from 'react-router-dom';

const  DisplayLink = ({ img, title, url, text}) =>{
    return(
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100">
            <span className="text-4xl text-purple-600 block mb-4">{img}</span>
            <h3 className="text-xl font-semibold mb-2"><Link to={url}>{title}</Link></h3>
            <p className="text-gray-600">
            {text}
            </p>
      </div>
    )
}

export default DisplayLink;