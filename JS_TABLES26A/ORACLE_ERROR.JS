// ORACLE_ERROR.js

window.ORACLE_ERROR = {
  "tables": {
    "ORACLE_ERROR": {
      "description": "This table maps Oracle codes to a translation id, in order to provide better information to the user on how to fix a problem when an Oracle error arises.",
      "columns": {
        "ERROR_CODE": {
          "type": "NUMBER(6)",
          "nullable": false,
          "key_value": true,
          "info": "The oracle error code."
},
        "CONSTRAINT_ID": {
          "type": "VARCHAR2(40)",
          "nullable": false,
          "key_value": true,
          "info": "A constraint name, such as the foreign key name, if applicable."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
},
        "ERROR_TRANSLATION_GID": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "foreign_key": "TRANSLATION",
          "info": "The translation id that the oracle error code is associated with.  Allows the ability to add customized translations for an Oracle error."
},
        "SOLUTION_TRANSLATION_GID": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "foreign_key": "TRANSLATION",
          "info": "The translation id that provides a user-friendly solution for the Oracle error."
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