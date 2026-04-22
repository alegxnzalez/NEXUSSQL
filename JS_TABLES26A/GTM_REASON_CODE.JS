// GTM_REASON_CODE.js

window.GTM_REASON_CODE = {
  "tables": {
    "GTM_REASON_CODE": {
      "description": "Stores Reason Code and Reason Description which can be used to indicate the cause of error, success, review requirement or similar use cases, which can convey information regarding the outcome of any process to the user.",
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
        "GTM_REASON_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Reason Code GID"
},
        "GTM_REASON_CODE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Reason Code XID"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description explaining the reason"
},
        "GTM_REASON_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_REASON_TYPE",
          "info": "Reason Type GID"
},
        "TRANSLATION_GID": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "foreign_key": "TRANSLATION"
}
      },
      "fk_tables": [
        "GTM_TIP_INV_MOVEMENT",
        "GTM_TRANS_LINE_QF",
        "ITEM_QF",
        "QF_PREFERENCE_CRITERIA_CODE"
]
    }
  }
};