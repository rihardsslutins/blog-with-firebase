import './PostListItem.css';

const PostListItem = ({ title, text, author }) => {
    return (
        <article>
            <div class="title-row">
                <h2>{title}</h2>
            </div>
            <div class="content-row">
                <p>{text.length > 30 ? `${text.substring(0, 30)}...` : text}</p>
                <span>author: {author}</span>
            </div>
        </article>
    );
};

export default PostListItem;
