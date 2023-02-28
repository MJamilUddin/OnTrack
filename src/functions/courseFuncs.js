/** @format */

export const findSpecAmount = (obj) => {
	var specCount = 0;
	Object.keys(obj).map((key) => {
		Object.keys(obj[key].subs).map((num) => {
			Object.keys(obj[key].subs[num]["spec"]).map((spec) => {
				return specCount++;
			});
		});
	});
	return specCount;
};
export const findSpecAmountNested = (obj) => {
	var specCount = 0;
	Object.keys(obj).map((key) => {
		Object.keys(obj[key].subs).map((num) => {
			Object.keys(obj[key].subs[num]["spec"]).map((spec) => {
				Object.keys(obj[key].subs[num]["spec"][spec].spec).map(val => {
					return specCount++;
				})
			});
		});
	});
	return specCount;
};

export const findSpecAmountByTopic = (obj, topic) => {
	var specCount = 0;
	Object.keys(obj).map((key) => {
		if (obj[key].topic === topic) {
			Object.keys(obj[key].subs).map((num) => {
				Object.keys(obj[key].subs[num]["spec"]).map((spec) => {
					return specCount++;
				});
			});
		}
	});
	return specCount;
};


export const findSpecAmountByTopicNested = (obj, topic) => {
	var specCount = 0;
	Object.keys(obj).map((key) => {
		if (obj[key].topic === topic) {
			Object.keys(obj[key].subs).map((num) => {
				Object.keys(obj[key].subs[num]["spec"]).map((spec) => {
					Object.keys(obj[key].subs[num]["spec"][spec].spec).map(val => {
						return specCount++;
					})
				});
			});
		}
	});
	return specCount;
};
