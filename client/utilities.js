/**
 * Created by jj on 10/12/16.
 */

// if error, use Bert to show error bar
// if success, either run the "success" function (if function) or show it as a message (if string)
exports.callBackBert = function(success){
    return (error) =>
    {
        if (error)
        {
            Bert.alert( error.reason, 'danger' );
            console.log(error);
        }
        else
        {
            if (typeof(success)=="function") success();
            else if (typeof(success)=="string") Bert.alert( success, 'success' );
            else console.log("Dunno what to do with input type", typeof(success));
        }
    };
};

// a random bonus number in the range of min~max (integers), in muplties of multi (e.g. 5)
exports.computeBonus = function(min, max, multi) {
    const n = Math.floor(min + (max - min) * Math.random());
    return n + (multi - n % multi);
};