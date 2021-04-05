import React, { Component } from 'react';
import Button from '../../../css/Button/Button';
import styles from "./Posts.module.css";

export class Posts extends Component {
    render() {
        return (
            <div className={styles.profile__posts}>
                <div className={styles.post}>
                    <h3>Title</h3>
                    <div className={styles.content}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dignissimos
                            sit placeat cumque reiciendis est id. Deserunt assumenda molestias sapiente nostrum!</p>
                    </div>
                    <Button color='#446699' className={styles.rightButton}>Learn more</Button>
                </div>
            </div>
        )
    }
}

export default Posts;
