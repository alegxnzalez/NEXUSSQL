// CONDITIONAL_BOOKING_PROF_D.js

window.CONDITIONAL_BOOKING_PROF_D = {
  "tables": {
    "CONDITIONAL_BOOKING_PROF_D": {
      "columns": {
        "CONDITIONAL_BOOKING_PROF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONDITIONAL_BOOKING_PROFILE"
},
        "CONDITIONAL_BOOKING_FIELD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONDITIONAL_BOOKING_FIELD"
},
        "ORDER_SEQUENCE": {
          "type": "NUMBER(5)",
          "nullable": true
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