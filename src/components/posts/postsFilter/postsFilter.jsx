import React from 'react';
import MyInput from '../../../UI/input/input';
import MySelect from '../../../UI/select/select';
import classes from './postsFilter.module.css'

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div className={classes.block}>
            <div className={classes.element}>
                <div className={classes.input}>
                <MyInput
                    type="text"
                    placeholder="Поиск..."
                    value={filter.query}
                    onChange={e => setFilter({ ...filter, query: e.target.value })} />
                </div>
            </div>
            <div className={classes.element}>
                <MySelect
                    value={filter.sort}
                    onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                    defaultValue="Сортировка"
                    options={[
                        { value: 'title', name: 'По названию' },
                        { value: 'body', name: 'По описанию' },
                    ]}
                />
            </div>
        </div>
    );
};

export default PostFilter;
