import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {

    renderField(field) {
        // const { meta } = field; => access direct to meta.touched
        // const { meta: { touched, error } } = field; => access direct to touched and error
        // const className = `form-group ${touched && error ? 'has-danger':''}`

        const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger':''}`

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                {field.meta.touched ? field.meta.error:''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        console.log("submit !!");
    }

    render() {
        // handleSubmit is added by redux-form on the export default reduxForm call.
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                <Link to="/" className="btn btn-danger">
                    cancel
                </Link>
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
