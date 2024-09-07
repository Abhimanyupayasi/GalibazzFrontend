import React, { useEffect } from 'react'
import CardOfPost from '../CardOfPost'
import GaliCard from './GaliCard'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function GaliyaFetch() {



    

  



      const galiya = [
        {
            "id": 1,
            "heading": "मादरचोद",
            "content": "यह गाली तब उपयोग होती है जब किसी पर अत्यधिक गुस्सा या नाराज़गी हो। यह गाली बहुत गंदे रूप में इस्तेमाल की जाती है। अक्सर इसे तब कहा जाता है जब किसी की हरकतें अस्वीकार्य होती हैं।",
            "type": "verybad",
            "username": "Galibazz.com",
            "createdAt": "1880-05-14T13:20:10.512Z"
        },
        {
            "id": 2,
            "heading": "बहनचोद",
            "content": "यह गाली किसी को गहरा अपमानित करने के लिए दी जाती है। आमतौर पर इसे तब कहा जाता है जब सामने वाला व्यक्ति न केवल नापसंद हो, बल्कि उसकी हरकतें भी गुस्सा दिलाने वाली होती हैं।",
            "type": "verybad",
            "username": "Galibazz.com",
            "createdAt": "1881-06-22T11:40:55.121Z"
        },
        {
            "id": 3,
            "heading": "चूतिया",
            "content": "इस गाली का उपयोग किसी को मूर्ख या नासमझ बताने के लिए किया जाता है। अक्सर इसे मज़ाक या गुस्से में कहा जाता है, जब सामने वाला व्यक्ति कुछ बेवकूफी भरी हरकत करता है।",
            "type": "bad",
            "username": "Galibazz.com",
            "createdAt": "1882-07-30T09:10:32.341Z"
        },
        {
            "id": 4,
            "heading": "भोसड़ी के",
            "content": "यह गाली गहरे गुस्से और असंतोष को व्यक्त करने के लिए दी जाती है। इसका उपयोग तब किया जाता है जब कोई व्यक्ति बुरी तरह से तंग कर रहा हो।",
            "type": "verybad",
            "username": "Galibazz.com",
            "createdAt": "1883-08-12T16:22:45.618Z"
        },
        {
            "id": 5,
            "heading": "गांड फाड़ देंगे",
            "content": "यह धमकी देने के लिए उपयोग की जाने वाली एक आक्रामक गाली है। इसका उपयोग तब होता है जब किसी को शारीरिक नुकसान पहुंचाने की धमकी दी जाती है।",
            "type": "verybad",
            "username": "Galibazz.com",
            "createdAt": "1884-09-19T14:12:11.812Z"
        },
        {
            "id": 6,
            "heading": "भैंस की औलाद",
            "content": "यह गाली किसी को जानवर के रूप में अपमानित करने के लिए दी जाती है। आमतौर पर इसे तब कहा जाता है जब सामने वाले की हरकतें बेहद जिद्दी या बेमतलब हों।",
            "type": "verybad",
            "username": "Galibazz.com",
            "createdAt": "1885-10-26T10:17:36.998Z"
        },
        {
            "id": 7,
            "heading": "चूतमारिका",
            "content": "हल्के अपमान के लिए इस्तेमाल की जाने वाली गाली है। इसका उपयोग अक्सर मजाक या हल्के गुस्से में किया जाता है।",
            "type": "bad",
            "username": "Galibazz.com",
            "createdAt": "1886-11-30T12:30:22.537Z"
        },
        {
            "id": 8,
            "heading": "सुअर के बच्चे",
            "content": "किसी की बुरी आदतों पर टिप्पणी करने के लिए अपमानजनक गाली दी जाती है। इसका उपयोग तब किया जाता है जब सामने वाले की हरकतें नापसंद हो।",
            "type": "verybad",
            "username": "Galibazz.com",
            "createdAt": "1887-12-18T13:56:43.127Z"
        },
        {
            "id": 9,
            "heading": "गांड में दम नहीं है",
            "content": "किसी की कायरता पर व्यंग्य करने के लिए यह गाली दी जाती है। इसका उपयोग तब होता है जब कोई व्यक्ति साहस नहीं दिखाता।",
            "type": "bad",
            "username": "Galibazz.com",
            "createdAt": "1888-01-25T09:21:54.231Z"
        },
        {
            "id": 10,
            "heading": "कुत्ते का पिल्ला",
            "content": "यह गाली किसी को बहुत तुच्छ और महत्वहीन कहने के लिए दी जाती है। इसका उपयोग तब किया जाता है जब कोई व्यक्ति बहुत ही नीच व्यवहार कर रहा हो।",
            "type": "verybad",
            "username": "Galibazz.com",
            "createdAt": "1889-02-12T08:33:27.415Z"
        },
        {
            "id": 11,
            "heading": "भोसड़ीवाला",
            "content": "यह गाली तब प्रयोग होती है जब किसी की हरकतें घृणास्पद लगें।",
            "type": "verybad",
            "username": "Galibazz.com",
            "createdAt": "1890-03-22T11:41:09.719Z"
        },
        {
            "id": 12,
            "heading": "गांडू",
            "content": "किसी को कमजोर और बेवकूफ समझने के लिए यह गाली दी जाती है।",
            "type": "bad",
            "username": "Galibazz.com",
            "createdAt": "1891-04-14T15:55:33.829Z"
        },
        {
            "id": 13,
            "heading": "चूत का राजा",
            "content": "इस गाली का उपयोग किसी को अत्यधिक मूर्ख समझने के लिए किया जाता है।",
            "type": "bad",
            "username": "Galibazz.com",
            "createdAt": "1892-05-16T17:23:47.511Z"
        },
        {
            "id": 14,
            "heading": "चूत खोल के बैठा है",
            "content": "यह गाली तब प्रयोग होती है जब कोई व्यक्ति बेशर्मी से पेश आता है।",
            "type": "verybad",
            "username": "Galibazz.com",
            "createdAt": "1893-06-22T14:40:01.112Z"
        },
        {
            "id": 15,
            "heading": "तेरी माँ की चूत",
            "content": "यह अत्यधिक अपमानजनक गाली है, किसी की माँ का अपमान करने के लिए।",
            "type": "verybad",
            "username": "Galibazz.com",
            "createdAt": "1894-07-30T19:27:19.902Z"
        },
        {
            "id": 16,
            "heading": "बेटीचोद",
            "content": "यह गाली परिवार के सदस्यों को अपमानित करने के लिए प्रयोग की जाती है।",
            "type": "verybad",
            "username": "Galibazz.com",
            "createdAt": "1895-08-12T13:59:12.673Z"
        },
        {
            "id": 17,
            "heading": "चिनाल की औलाद",
            "content": "किसी को नीच दिखाने और उनके वंश को अपमानित करने वाली गाली।",
            "type": "verybad",
            "username": "Galibazz.com",
            "createdAt": "1896-09-22T18:10:25.361Z"
        },
        {
            "id": 18,
            "heading": "रंडी का बच्चा",
            "content": "इस गाली का उपयोग किसी को तुच्छ और गंदा बताने के लिए किया जाता है।",
            "type": "verybad",
            "username": "Galibazz.com",
            "createdAt": "1897-10-16T21:48:54.743Z"
        },
    
        {
          "id": 19,
          "heading": "कायर",
          "content": "किसी के डरपोक और कमजोर स्वभाव को व्यक्त करने के लिए दी जाने वाली गाली।",
          "type": "bad",
          "username": "Galibazz.com",
          "createdAt": "01-03-2009"
      },
      {
          "id": 20,
          "heading": "धूर्त",
          "content": "किसी के चालाक और धोखेबाज स्वभाव को व्यक्त करने के लिए दी जाने वाली गाली।",
          "type": "bad",
          "username": "Galibazz.com",
          "createdAt": "15-05-2009"
      },
      {
          "id": 21,
          "heading": "चालबाज़",
          "content": "किसी के चालाकी भरे स्वभाव को दर्शाने के लिए दी जाने वाली गाली।",
          "type": "bad",
          "username": "Galibazz.com",
          "createdAt": "01-07-2009"
      },
      {
          "id": 22,
          "heading": "बेईमान",
          "content": "किसी के झूठे और धोखेबाज स्वभाव को व्यक्त करने के लिए दी जाने वाली गाली।",
          "type": "bad",
          "username": "Galibazz.com",
          "createdAt": "20-09-2009"
      },
      {
          "id": 23,
          "heading": "गंवार",
          "content": "किसी को अशिक्षित और असभ्य बताने के लिए दी जाने वाली गाली।",
          "type": "bad",
          "username": "Galibazz.com",
          "createdAt": "05-11-2009"
      },
      {
          "id": 24,
          "heading": "नीच",
          "content": "किसी के चरित्र को खराब और घृणित बताने के लिए दी जाने वाली गाली।",
          "type": "bad",
          "username": "Galibazz.com",
          "createdAt": "15-12-2009"
      },
      {
          "id": 25,
          "heading": "घटिया",
          "content": "किसी के निम्नस्तरीय काम और स्वभाव को दर्शाने के लिए दी जाने वाली गाली।",
          "type": "bad",
          "username": "Galibazz.com",
          "createdAt": "01-02-2010"
      },
      {
          "id": 26,
          "heading": "नालायक",
          "content": "किसी की अयोग्यता और मूर्खता को व्यक्त करने के लिए दी जाने वाली गाली।",
          "type": "bad",
          "username": "Galibazz.com",
          "createdAt": "10-04-2010"
      },
      {
          "id": 27,
          "heading": "मूर्ख",
          "content": "किसी के कम समझदार और बेवकूफ होने के लिए दी जाने वाली गाली।",
          "type": "bad",
          "username": "Galibazz.com",
          "createdAt": "15-06-2010"
      },
      {
          "id": 28,
          "heading": "धोखेबाज़",
          "content": "किसी के धोखा देने वाले स्वभाव को व्यक्त करने के लिए दी जाने वाली गाली।",
          "type": "bad",
          "username": "Galibazz.com",
          "createdAt": "01-08-2010"
      },
      {
          "id": 29,
          "heading": "बदमाश",
          "content": "किसी के अपराधी और असामाजिक स्वभाव को व्यक्त करने के लिए दी जाने वाली गाली।",
          "type": "bad",
          "username": "Galibazz.com",
          "createdAt": "15-10-2010"
      },
      {
          "id": 30,
          "heading": "बेवकूफ",
          "content": "किसी के मूर्खतापूर्ण स्वभाव को दर्शाने के लिए दी जाने वाली गाली।",
          "type": "bad",
          "username": "Galibazz.com",
          "createdAt": "01-12-2010"
      },
      {
          "id": 31,
          "heading": "असभ्य",
          "content": "किसी के असभ्य और अशिष्ट व्यवहार को व्यक्त करने के लिए दी जाने वाली गाली।",
          "type": "bad",
          "username": "Galibazz.com",
          "createdAt": "20-02-2011"
      },
      {
          "id": 32,
          "heading": "धूर्त",
          "content": "किसी के चालाक और धोखेबाज स्वभाव को व्यक्त करने के लिए दी जाने वाली गाली।",
          "type": "bad",
          "username": "Galibazz.com",
          "createdAt": "01-05-2011"
      },
      {
          "id": 33,
          "heading": "मक्कार",
          "content": "किसी के झूठे और धोखेबाज स्वभाव को व्यक्त करने के लिए दी जाने वाली गाली।",
          "type": "bad",
          "username": "Galibazz.com",
          "createdAt": "15-07-2011"
      },
      {
          "id": 34,
          "heading": "हरामी",
          "content": "किसी के खराब और घृणित स्वभाव को व्यक्त करने के लिए दी जाने वाली गाली।",
          "type": "verybad",
          "username": "Galibazz.com",
          "createdAt": "01-09-2011"
      },
      {
          "id": 35,
          "heading": "हरामखोर",
          "content": "किसी के घृणित और नीच कामों को व्यक्त करने के लिए दी जाने वाली गाली।",
          "type": "verybad",
          "username": "Galibazz.com",
          "createdAt": "15-11-2011"
      },
      {
          "id": 36,
          "heading": "चोर",
          "content": "किसी के चोरी करने के स्वभाव को व्यक्त करने के लिए दी जाने वाली गाली।",
          "type": "bad",
          "username": "Galibazz.com",
          "createdAt": "01-01-2012"
      },
      {
          "id": 37,
          "heading": "कपटी",
          "content": "किसी के छलपूर्ण और धोखेबाज स्वभाव को व्यक्त करने के लिए दी जाने वाली गाली।",
          "type": "bad",
          "username": "Galibazz.com",
          "createdAt": "15-03-2012"
      },
      {
          "id": 38,
          "heading": "गधा",
          "content": "किसी के मूर्ख और नासमझ होने के लिए दी जाने वाली गाली।",
          "type": "bad",
          "username": "Galibazz.com",
          "createdAt": "01-05-2012"
      },
      {
        "id": 39,
        "heading": "रंडीबाज़",
        "content": "किसी को व्यभिचारी और अनैतिक व्यक्तित्व बताने के लिए दी जाने वाली गाली।",
        "type": "verybad",
        "username": "Galibazz.com",
        "createdAt": "01-01-2024"
      },
      {
        "id": 40,
        "heading": "मालबाज़",
        "content": "किसी को बेकार और घटिया स्वभाव का बताने के लिए दी जाने वाली गाली।",
        "type": "bad",
        "username": "Galibazz.com",
        "createdAt": "10-01-2024"
      },
      {
        "id": 41,
        "heading": "भड़वा",
        "content": "किसी को व्यभिचार में शामिल बताने के लिए दी जाने वाली गाली।",
        "type": "verybad",
        "username": "Galibazz.com",
        "createdAt": "20-01-2024"
      },
      {
        "id": 42,
        "heading": "गांडू",
        "content": "किसी को मूर्ख और तुच्छ बताने के लिए दी जाने वाली गाली।",
        "type": "verybad",
        "username": "Galibazz.com",
        "createdAt": "30-01-2024"
      },
      {
        "id": 43,
        "heading": "छिनार",
        "content": "किसी को व्यभिचारी और अनैतिक व्यक्तित्व बताने के लिए दी जाने वाली गाली।",
        "type": "verybad",
        "username": "Galibazz.com",
        "createdAt": "10-02-2024"
      },
      {
        "id": 44,
        "heading": "रंडी",
        "content": "किसी महिला को अपमानित और व्यभिचारी बताने के लिए दी जाने वाली गाली।",
        "type": "verybad",
        "username": "Galibazz.com",
        "createdAt": "20-02-2024"
      },
      {
        "id": 45,
        "heading": "बहन का लौड़ा",
        "content": "किसी को अपमानित करने और उसके परिवार का अपमान करने के लिए दी जाने वाली गाली।",
        "type": "verybad",
        "username": "Galibazz.com",
        "createdAt": "01-03-2024"
      },
      {
        "id": 46,
        "heading": " माकड़ा",
        "content": "किसी को चालाक और घातक बताने के लिए दी जाने वाली गाली।",
        "type": "bad",
        "username": "Galibazz.com",
        "createdAt": "10-03-2024"
      },
      {
        "id": 47,
        "heading": "बहनकड़ा",
        "content": "किसी के परिवार को अपमानित करने के लिए दी जाने वाली गाली।",
        "type": "verybad",
        "username": "Galibazz.com",
        "createdAt": "20-03-2024"
      },
      {
        "id": 48,
        "heading": "तेरी माँ चोद डालेंगे",
        "content": "किसी को अत्यधिक अपमानित और गुस्सा दिलाने के लिए दी जाने वाली गाली।",
        "type": "verybad",
        "username": "Galibazz.com",
        "createdAt": "01-04-2024"
      },
      {
        "id": 49,
        "heading": "बेनचोद",
        "content": "किसी को अत्यधिक तुच्छ और नीच बताने के लिए दी जाने वाली गाली।",
        "type": "verybad",
        "username": "Galibazz.com",
        "createdAt": "10-04-2024"
      },
      {
        "id": 50,
        "heading": "चमड़ी उतार दूंगा",
        "content": "किसी को धमकी और अपमानित करने के लिए दी जाने वाली गाली।",
        "type": "verybad",
        "username": "Galibazz.com",
        "createdAt": "20-04-2024"
      },
      {
        "id": 51,
        "heading": "कमीना",
        "content": "किसी के नीच और धोखेबाज स्वभाव को व्यक्त करने के लिए दी जाने वाली गाली।",
        "type": "bad",
        "username": "Galibazz.com",
        "createdAt": "01-05-2024"
      },
      {
        "id": 52,
        "heading": "सुअर का बच्चा",
        "content": "किसी को अत्यधिक अपमानित और तुच्छ बताने के लिए दी जाने वाली गाली।",
        "type": "verybad",
        "username": "Galibazz.com",
        "createdAt": "10-05-2024"
      },
      {
        "id": 53,
        "heading": "हरामजादा",
        "content": "किसी को घृणित और घिनौना बताने के लिए दी जाने वाली गाली।",
        "type": "verybad",
        "username": "Galibazz.com",
        "createdAt": "20-05-2024"
      },
     {
        "id": 54,
        "heading": "घंटा",
        "content": "क्रुद्ध होने पर किसी को कही जाने वाली  गाली।",
        "type": "verybad",
        "username": "Galibazz.com",
        "createdAt": "20-05-2024"
      },
     {
        "id": 55,
        "heading": "बहन के लंड",
        "content": "इस गाली का उपयोग ऐसे मौकों पर किया जा सकता है जब कोई व्यक्ति गुस्से की स्थिति में हो ।",
        "type": "verybad",
        "username": "Galibazz.com",
        "createdAt": "23-05-2024"
      },
    { 
        "id": 56,
        "heading": "मां चुदा ",
        "content": "इस गाली का उपयोग ऐसे मौकों पर किया जा सकता है जब कोई व्यक्ति गुस्से, जल्दी आदि की स्थिति में हो ।",
        "type": "verybad",
        "username": "Galibazz.com",
        "createdAt": "25-05-2024"
      },
    { 
        "id": 57,
        "heading": "गांड मरा ",
        "content": " गुस्से, जल्दी आदि पर क्रुद्ध होने पर किसी को कही जाने वाली  गाली ।",
        "type": "verybad",
        "username": "Galibazz.com",
        "createdAt": "27-05-2024"
      },
    { 
        "id": 58,
        "heading": "दाई चोद ",
        "content": " यह अत्यधिक अपमानजनक गाली है, किसी की माँ का अपमान करने के लिए।",
        "type": "verybad",
        "username": "Galibazz.com",
        "createdAt": "27-05-2024"
      },
    { 
        "id": 59,
        "heading": "दुष्ट ",
        "content": " एक गंभीर व क्रूर धमकी वाला मुहावरा है, जो किसी गाली से बढकर व वृहत अर्थ वाली है।",
        "type": "verybad",
        "username": "Galibazz.com",
        "createdAt": "28-05-2024"
      },
    { 
        "id": 60,
        "heading": "बकचोद ",
        "content": " बेवजह और फ़ालतू की बातें करने पर कही जाने वाली  गाली।",
        "type": "bad",
        "username": "Galibazz.com",
        "createdAt": "28-05-2024"
      },
    { 
        "id": 61,
        "heading": "चिरकुट ",
        "content": " सस्ता,गंदा,मूल्यरहीत,घटिया,बेवफा पर कही जाने वाली  गाली।",
        "type": "bad",
        "username": "Galibazz.com",
        "createdAt": "29-05-2024"
      },
    { 
        "id": 62,
        "heading": "दोगला ",
        "content": "पाखंडी,ढोंगी,पर कही जाने वाली  गाली।",
        "type": "bad",
        "username": "Galibazz.com",
        "createdAt": "29-05-2024"
      },
    { 
        "id": 63,
        "heading": "चोदू ",
        "content": "इस शब्द का इस्तेमाल आम तौर पर मज़ाक या हल्के अपमान के लिए किया जाता है।",
        "type": "bad",
        "username": "Galibazz.com",
        "createdAt": "29-05-2024"
      },
    { 
        "id": 64,
        "heading": "मच्छर की झाट ",
        "content": "इस शब्द का इस्तेमाल आम तौर पर मज़ाक या हल्के अपमान के लिए किया जाता है।",
        "type": "bad",
        "username": "Galibazz.com",
        "createdAt": "30-05-2024"
      },
    { 
        "id": 65,
        "heading": "लपड़झंडीस",
        "content": " जिसके व्यवहार से बुद्धि, सामान्य ज्ञान या अच्छे निर्णय की कमी का पता चलता है।",
        "type": "bad",
        "username": "Galibazz.com",
        "createdAt": "30-05-2024"
      },
    
    { 
        "id": 66,
        "heading": "लौड़े के बाल ",
        "content": "इस शब्द का इस्तेमाल आम तौर पर मज़ाक या हल्के अपमान के लिए किया जाता है।",
        "type": "bad",
        "username": "Galibazz.com",
        "createdAt": "30-05-2024"
      },
    { 
        "id": 67,
        "heading": "झांटू ",
        "content": "इस शब्द का इस्तेमाल आम तौर पर मज़ाक या हल्के अपमान के लिए किया जाता है।",
        "type": "bad",
        "username": "Galibazz.com",
        "createdAt": "30-05-2024"
      },
    { 
        "id": 68,
        "heading": "लोंडियाबाज ",
        "content": "किसी को व्यभिचारी और अनैतिक व्यक्तित्व बताने के लिए दी जाने वाली गाली।",
        "type": "bad",
        "username": "Galibazz.com",
        "createdAt": "30-05-2024"
      },
    { 
        "id": 69,
        "heading": "झंडू ",
        "content": "इस शब्द का इस्तेमाल आम तौर पर मज़ाक या हल्के अपमान के लिए किया जाता है।",
        "type": "bad",
        "username": "Galibazz.com",
        "createdAt": "30-05-2024"
      },
    { 
        "id": 70,
        "heading": "गधे की गांड ",
        "content": "इस शब्द का इस्तेमाल आम तौर पर मज़ाक या हल्के अपमान के लिए किया जाता है।",
        "type": "bad",
        "username": "Galibazz.com",
        "createdAt": "30-05-2024"
      },
    { 
        "id": 71,
        "heading": "आंटीबाज ",
        "content": "किसी को अनैतिक व्यक्तित्व बताने के लिए दी जाने वाली गाली।",
        "type": "bad",
        "username": "Galibazz.com",
        "createdAt": "30-05-2024"
      },
    { 
        "id": 72,
        "heading": " चरित्रहीन",
        "content": "किसी के चरित्र को खराब और घृणित बताने के लिए दी जाने वाली गाली।",
        "type": "bad",
        "username": "Galibazz.com",
        "createdAt": "01-06-2024"
      },
    { 
        "id": 73,
        "heading": "जाहिल ",
        "content": "किसी को असभ्य बताने के लिए दी जाने वाली गाली।",
        "type": "bad",
        "username": "Galibazz.com",
        "createdAt": "01-06-2024"
      },
    { 
        "id": 74,
        "heading": "नज़ायज़ ",
        "content": "इस शब्द का इस्तेमाल आम तौर पर वह मनुष्य जो अपनी माता के असली पति से नहीं बल्कि उसके यार से उत्पन्न हुआ हो,अपमान के लिए किया जाता है।",
        "type": "bad",
        "username": "Galibazz.com",
        "createdAt": "01-06-2024"
      },
      
    
      ]
    
      
  return (
    <div>
        
        {galiya.map((gali) => (
            // <CardOfPost key={gali.id} {...gali} />
            <GaliCard key={gali.id} {...gali} />
        ))}
    </div>
  )
}

export default GaliyaFetch