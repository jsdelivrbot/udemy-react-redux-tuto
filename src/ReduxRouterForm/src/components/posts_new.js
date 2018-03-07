import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        );
    }

    render() {
        return (
            <form>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        );
    }
}

function validate(values) {
    console.log(values);
    const errors = {};
    // validate the inputs from 'values'
    if (!values.title || values.title.length < 2) {
        errors.title = "Enter a title with more than 2 chars !";
    }
    if (!values.categories) {
        errors.categories = "Enter a Category !";
    }
    if (!values.content) {
        errors.content = "Enter a content !";
    }

    // if errors is empty, the form is fine to submit
    // if errors has any property, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'PostsNewForm'
})(PostsNew);
