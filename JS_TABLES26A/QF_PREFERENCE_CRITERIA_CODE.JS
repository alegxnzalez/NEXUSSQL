// QF_PREFERENCE_CRITERIA_CODE.js

window.QF_PREFERENCE_CRITERIA_CODE = {
  "tables": {
    "QF_PREFERENCE_CRITERIA_CODE": {
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
        "QF_PREFERENCE_CRITERIA_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "QF_PREFERENCE_CRITERIA",
          "info": "Preference Criteria ID"
},
        "GTM_REASON_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_REASON_CODE",
          "info": "Reason Code for the successful qualification of an item."
}
      },
      "fk_tables": []
    }
  }
};