const e = React.createElement;

// const googleForms = <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfQkjKQ2tehGLyViZEctWvr4ZdAYg38LKhedTHPM2NVvUYmMA/viewform?embedded=true" width="640" height="680" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return (<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfQkjKQ2tehGLyViZEctWvr4ZdAYg38LKhedTHPM2NVvUYmMA/viewform?embedded=true" width="640" height="680" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>);
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      "Click Here For Form"
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));