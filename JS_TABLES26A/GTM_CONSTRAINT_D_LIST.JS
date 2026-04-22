// GTM_CONSTRAINT_D_LIST.js

window.GTM_CONSTRAINT_D_LIST = {
  "tables": {
    "GTM_CONSTRAINT_D_LIST": {
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
        "GTM_CONSTRAINT_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_CONSTRAINT",
          "info": "Indicates the Constraint Set of the parent Constraint of the Constraint Detail."
},
        "GTM_CONSTRAINT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_CONSTRAINT",
          "info": "Indicates the Constraint Type of the Constraint Detail. This is the same as the Constraint Type of the parent Constraint for which the Constraint Detail is specified."
},
        "LIST_SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Unique list sequence Number of the Constraint Detail in the list of Constraint Details."
},
        "VALUE1": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Holds the qualifier value."
},
        "VALUE3": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Holds the value3."
},
        "VALUE4": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Holds the value4."
},
        "VALUE_2": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Holds the value_2."
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE",
          "info": "Indicates the OTM Release version"
}
      },
      "fk_tables": []
    }
  }
};