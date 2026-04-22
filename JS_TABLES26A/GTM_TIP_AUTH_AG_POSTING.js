// GTM_TIP_AUTH_AG_POSTING.js

window.GTM_TIP_AUTH_AG_POSTING = {
  "tables": {
    "GTM_TIP_AUTH_AG_POSTING": {
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
        "GTM_TIP_AUTH_AG_POSTING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GTM Trade Incentive Program Allowed Good Posting GID"
},
        "GTM_TIP_AUTH_AG_POSTING_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GTM Trade Incentive Program Allowed Good Posting XID"
},
        "GTM_TIP_AUTHORIZATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_TIP_AUTH_ALLOWED_GOOD",
          "info": "Trade Incentive Program Authorization GID"
},
        "SEQUENCE_NO": {
          "type": "NUMBER",
          "nullable": false,
          "foreign_key": "GTM_TIP_AUTH_ALLOWED_GOOD",
          "info": "Sequence Number"
},
        "REFERENCE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Reference Type"
},
        "REFERENCE_NUMBER": {
          "type": "VARCHAR2(201)",
          "nullable": false,
          "info": "Reference Number"
},
        "QUANTITY": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Used Authorized Good quantity"
},
        "QUANTITY_UOM_CODE": {
          "type": "VARCHAR2(22)",
          "nullable": true,
          "info": "Used Authorized Good Quantity Units of Measure Code"
},
        "VALUE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Used Authorized Good Value in Currency"
},
        "VALUE_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Used Authorized Good Value in Base Units"
},
        "VALUE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "Used Authorized Good Value Currency GID"
},
        "POSTED_ON": {
          "type": "DATE",
          "nullable": true,
          "info": "Posted on date"
}
      },
      "fk_tables": []
    }
  }
};