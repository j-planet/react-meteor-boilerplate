import React from 'react';
import _ from 'lodash';


Bert.defaults = {
    hideDelay: 1500,
    style: 'growl-top-right'
};

// if error, use Bert to show error bar
// if success, either run the "success" function (if function) or show it as a message (if string)
exports.callBackBert = function(success){
    return (error, data) =>
    {
        if (error)
        {
            Bert.alert( error.reason, 'danger' );
            console.log(error);
        }
        else
        {
            if (typeof(success)=="function") success(data);
            else if (typeof(success)=="string") Bert.alert( success, 'success' );
            else if (success) console.log("Dunno what to do with input type", typeof(success));
        }
    };
};

// baseName: refs are "baseName-value" (e.g. dressyRadio-average); also used as the group name of radio buttons
// inline: stacked radio buttons by default, inline if inline=true
exports.render_radio_buttons = function(onClickCallBack, baseName, values, checkedValue, inline)
{
    // TODO: this is silly I know. I just dunno how to define only parts of the default parameters
    if (typeof checkedValue == 'undefined') checkedValue = null;
    if (typeof inline == 'undefined') inline = false;

    if (inline) {
        return values.map(v =>
            <label className="form-check-inline" key={v}>
                <input ref={`$baseName-$v`}
                       name={baseName}
                       value={v}
                       className="form-check-input" type="radio"
                       checked={checkedValue == v}
                       onChange={onClickCallBack}
                /> {v}
            </label>
        )
    }
    else {
        return values.map(v =>
            <div className="form-check" key={v}>
                <label className="form-check-label">
                    <input ref={`$baseName-$v`}
                           name={baseName}
                           value={v}
                           className="form-check-input" type="radio"
                           checked={checkedValue == v}
                           onChange={onClickCallBack}
                    /> {v}
                </label>
            </div>
        )
    }
};

exports.render_dropdown = function (items, clickHandler, displayText, inline)
{
    const dropdownItems = items.map(item =>
            <a className="dropdown-item" href="#" name={item} key={item} onClick={clickHandler}>{item}</a>
        );

    return <div className={inline ? "btn-group" : "dropdown"}>
        <button className="btn dropdown-toggle" type="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {displayText}
        </button>

        <div className="dropdown-menu" aria-labelledby="categoryDropdown">
            { dropdownItems }
        </div>
    </div>;
};