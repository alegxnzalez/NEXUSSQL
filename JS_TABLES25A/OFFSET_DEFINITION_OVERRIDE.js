// OFFSET_DEFINITION_OVERRIDE.js

window.OFFSET_DEFINITION_OVERRIDE = {
  "tables": {
    "OFFSET_DEFINITION_OVERRIDE": {
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
        "OFFSET_DEFINITION_OVERRIDE_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "It represents unique identifier of override defnition. "
        },
        "OFFSET_DEFINITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "OFFSET_DEFINITION",
          "info": "is the unique identifier of offset "
        },
        "START_DATETIME": {
          "type": "DATE",
          "nullable": false,
          "info": "it represents override stat time "
        },
        "END_DATETIME": {
          "type": "DATE",
          "nullable": false,
          "info": "it represents override end time "
        },
        "OVERRIDE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "It represents the purpose of override "
        },
        "OFFSET_DAYS": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "It represents offset days to be added for given date "
        },
        "OFFSET_TIME": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "it reprensents offset time in milliseconds"
        }
      },
      "fk_tables": []
    }
  }
};
