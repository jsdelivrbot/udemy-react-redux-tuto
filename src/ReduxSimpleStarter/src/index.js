import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCXH3HFy7bufyh6eFL2r7qnXJ3zbdtuQd8';

// create a new component. This component should produce some html
class App extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            videoList: [],
            selectedVideo: null
        };

/*
        YTSearch({key: API_KEY, term: 'surfboards'}, (videoList) => {
            this.setState({ videoList: videoList});
        });
*/
        this.videoSearch('surfboards')
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videoList) => {
            this.setState({
                videoList: videoList,
                selectedVideo: videoList[0]
            });
        });
    }


    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    videoList={this.state.videoList}
                    onVideoSelect={ selectedVideo =>  this.setState({selectedVideo}) }
                />
            </div>
        );
    }
}

// take this components generated htmland put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
