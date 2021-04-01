import React, { Component } from 'react';
import Button from '../../../css/Button/Button';
import styles from "./Post.module.css";

export class Post extends Component {
    render() {
        return (
            <div className={styles.container__posts}>
                <div className={styles.post}>
                    <h3>Title</h3>
                    <div className={styles.date}><b>_01.04.2021 14:24_</b></div>
                    <hr></hr>
                    <div className={styles.content}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus iusto
                        officiis quidem labore odio vel pariatur, impedit in consequatur at
                        praesentium officia sit vero, alias voluptates et repellat sed atque.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus iusto
                        </p>
                    </div>
                    <Button color='orange'>Learn more</Button>
                </div>
                <div className={styles.post}>
                    <h3>Title</h3>
                    <div className={styles.date}><b>_01.04.2021 14:24_</b></div>
                    <hr></hr>
                    <div className={styles.content}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus iusto
                        officiis quidem labore odio vel pariatur, impedit in consequatur at
                        praesentium officia sit vero, alias voluptates et repellat sed atque.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus iusto
                        </p>
                    </div>
                    <Button color='orange'>Learn more</Button>
                </div>
                <div className={styles.post}>
                    <h3>Title</h3>
                    <div className={styles.date}><b>_01.04.2021 14:24_</b></div>
                    <hr></hr>
                    <div className={styles.content}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus iusto
                        officiis quidem labore odio vel pariatur, impedit in consequatur at
                        praesentium officia sit vero, alias voluptates et repellat sed atque.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus iusto
                        </p>
                    </div>
                    <Button color='orange'>Learn more</Button>
                </div>

            </div>
        )
    }
}

export default Post;
