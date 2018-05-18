import React from 'react'

class MovieRow extends React.Component {
    constructor(){
        super()
    }

    render() {
        return <table key={this.props.movie.id}>
            <tbody>
            <tr>
                <td>
                    <img style={{
                        paddingLeft: 20
                    }}
                         alt={"poster"} width={"120"}
                         src={this.props.movie.poster_src}/>
                </td>
                <td>

                    {this.props.movie.title}
                    <p>{this.props.movie.overview}</p>

                </td>
            </tr>
            </tbody>
        </table>
    }
}

export default MovieRow