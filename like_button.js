const e = React.createElement;

var googleForms = document.createElement('div');
googleForms.setAttribute('class', 'post block bc2');
googleForms.innerHTML= '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfQkjKQ2tehGLyViZEctWvr4ZdAYg38LKhedTHPM2NVvUYmMA/viewform?embedded=true" width="640" height="680" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>';
const domContainer = document.querySelector('#like_button_container');

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      domContainer.appendChild(googleForms);
      return;
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      "Click Here For Form"
    );
  }
}

const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));