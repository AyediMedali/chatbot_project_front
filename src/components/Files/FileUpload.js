import React from "react";
import Spinner from './Spinner'
import Images from "./Images";
import Buttons from "./Buttons";

class FileUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            uploading: false,
            images: [],
            obj: 0
        }
    }

    componentDidMount() {
        this.setState({obj : this.props.obj})
    }


    onChange = e => {
        const formData = new FormData()

        const files = Array.from(e.target.files)
        // #1 There are too many files!

        if (files.length > 5) {
            const msg = 'Only 5 images can be uploaded at a time'
            return (<div><h2>Only 5 images can be uploaded at a time</h2></div>)
        }

        const types = ['image/png', 'image/jpeg', 'image/gif']

        files.forEach((file, i) => {

            // #2 Catching wrong file types on the client
            if (types.every(type => file.type !== type)) {
                return (<div><h2>${file.type} is not a supported format</h2></div>)

            }
            // #3 Catching files that are too large on the client
            if (file.size > 150000) {
                return (<div><h2>${file.name} is too large, please pick a smaller file</h2></div>)
            }
            formData.append(i, file)
        })


        this.setState({uploading: true})
        formData.append('id',this.props.obj._id);
        fetch('http://localhost:3000/event/uploadImage', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body:formData
        })
        .then(res => res.json())
        .then(images => {
            this.setState({
                uploading: false,
                images
            })
        })
    }

    removeImage = id => {
        this.setState({
            images: this.state.images.filter(image => image.public_id !== id)
        })
    }


    render() {
        const {uploading, images} = this.state
        const obj = this.props.obj;
        const content = () => {
            switch (true) {
                case uploading:
                    return <Spinner/>
                case images.length > 0:
                    return <Images images={images} removeImage={this.removeImage}/>
                default:
                    return <Buttons onChange={this.onChange}/>
            }
        }
        return (
            <div>
                <div className='buttons'>
                    {content()}
                </div>
            </div>
        )
    }
}

export default FileUpload;