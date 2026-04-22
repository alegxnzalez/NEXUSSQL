// RATE_LOAD_TEMPLATE_RR_D.js

window.RATE_LOAD_TEMPLATE_RR_D = {
  "tables": {
    "RATE_LOAD_TEMPLATE_RR_D": {
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
        "RATE_LOAD_TEMPLATE_RR_D_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "RATE_LOAD_TEMPLATE_RR_D_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID. "
        },
        "RATE_LOAD_FIELD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_LOAD_FIELD",
          "info": "Reference of the rate load field GID. "
        },
        "DEFAULT_DISPLAY_NAME": {
          "type": "VARCHAR2(300)",
          "nullable": false,
          "info": "The default display name for the column. "
        },
        "DISPLAY_NAME": {
          "type": "VARCHAR2(300)",
          "nullable": true,
          "info": "User defined name for the given column. "
        },
        "TABLE_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The table name that the column is being pulled from. "
        },
        "COLUMN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The actual column name of the current column in the table. "
        },
        "COLUMN_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The type of the column. "
        },
        "IS_USED_IN_SPREADSHEET": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Defines whether the field is used in spreadsheet or not. "
        },
        "IS_READ_ONLY": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Defines whether the field is a read only field or not. "
        },
        "RATE_LOAD_TAB_DEFINITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_LOAD_TAB_DEFINITION",
          "info": "Reference to the rate load tab definition GID. "
        },
        "RATE_LOAD_DEFINITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_LOAD_DEFINITION",
          "info": "Reference to the rate load definition GID. "
        },
        "HIERARCHY": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Defines the dynamic hierarchy structure of rate geo structure display in rate load definition. "
        },
        "IS_MANDATORY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Set to 'Y' for rate record fields which are mandatory for creating Rate Load Definition. "
        },
        "IS_HEADER": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Set to 'Y' if the field is a header field while creating Rate Load Definition."
        }
      },
      "fk_tables": []
    }
  }
};
