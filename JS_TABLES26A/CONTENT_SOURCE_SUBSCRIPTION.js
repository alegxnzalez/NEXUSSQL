// CONTENT_SOURCE_SUBSCRIPTION.js

window.CONTENT_SOURCE_SUBSCRIPTION = {
  "tables": {
    "CONTENT_SOURCE_SUBSCRIPTION": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "CONTENT_SOURCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTENT_SOURCE"
},
        "SUBSCRIPTION_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
},
        "SUBSCRIPTION_REFERENCE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "This is the reference provided when subscribing to a set of events in an external system."
},
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "LAST_TRANSACTION_ID": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "REQUEST_STYLESHEET_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STYLESHEET_PROFILE",
          "info": "Stylesheet to apply to Request XML to generate vendor content request."
},
        "RESPONSE_STYLESHT_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STYLESHEET_PROFILE",
          "info": "Stylesheet to apply to the response of the request."
},
        "SEND_ACK": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Specifies if an acknowledgement should be sent to the vendor confirming receipt of content."
},
        "ACK_STYLESHEET_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STYLESHEET_PROFILE"
}
      },
      "fk_tables": []
    }
  }
};