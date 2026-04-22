// DERIVED_FIELD_PARAM_DISPLAY.js

window.DERIVED_FIELD_PARAM_DISPLAY = {
  "tables": {
    "DERIVED_FIELD_PARAM_DISPLAY": {
      "description": "Defines how the derived field parameter is configured for display.",
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
        "DERIVED_DATA_OP_IMPL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DERIVED_FIELD_PARAMETER",
          "info": "Contains the unique identifier for the derived data operations implementation."
},
        "FIELD_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DERIVED_FIELD_PARAMETER",
          "info": "Field name"
},
        "PARAMETER_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DERIVED_FIELD_PARAMETER",
          "info": "Parameter name"
},
        "FIELD_SIZE": {
          "type": "NUMBER",
          "nullable": true
},
        "IS_REQUIRED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Field is required.  For future use."
},
        "IS_DROP_LIST": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Field is a drop list."
},
        "IS_MULTIPART_DROP_LIST": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Field is a multi-part drop list."
},
        "IS_DROP_LIST_WITH_DESCRIPTION": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Field is a drop list displaying description."
},
        "ALLOW_NEGATIVE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Allow negative numbers"
},
        "ALLOW_NEW": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Allow new button.  For pick lists."
},
        "ALLOW_LIST": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Allow list button.  For pick lists."
},
        "ALLOW_VIEW": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Allow view button.  For pick lists and drop lists."
},
        "ALLOW_FIND": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Allow find button.  For pick lists."
},
        "MIN_VALUE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Minimum number value."
},
        "MAX_VALUE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Maximum number value."
},
        "VALID_VALUE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VALID_VALUE_TYPE",
          "info": "Contains the unique identifier for the valid value type.  Used to create a fixed drop list."
},
        "DEFAULT_OPERATOR": {
          "type": "VARCHAR2(15)",
          "nullable": true,
          "info": "Default query operator."
},
        "SHOW_DAYS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Show days.  For durations."
},
        "SHOW_HOURS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Show hours.  For durations."
},
        "SHOW_MINUTES": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Show minutes. For durations."
},
        "QUERY_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Alternate query name."
},
        "ALLOW_MIXED_CASE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Allow mixed case strings."
}
      },
      "fk_tables": []
    }
  }
};