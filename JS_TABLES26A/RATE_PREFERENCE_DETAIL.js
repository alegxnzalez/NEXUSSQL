// RATE_PREFERENCE_DETAIL.js

window.RATE_PREFERENCE_DETAIL = {
  "tables": {
    "RATE_PREFERENCE_DETAIL": {
      "description": "This is the detail table that contains the groups of preferred carriers' rate offerings.  The preferred carriers' rate offerings are grouped by the rate_preference_gid, which is created in the parent table RATE_PREFERENCE.",
      "columns": {
        "RATE_PREFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_PREFERENCE",
          "info": "Unique identifier of preferred carriers for a lane or zone."
},
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_OFFERING",
          "info": "The rate offering that is preferred."
},
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
}
      },
      "fk_tables": []
    }
  }
};