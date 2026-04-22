// PROP_INSTRUCTION_SET_LOG.js

window.PROP_INSTRUCTION_SET_LOG = {
  "tables": {
    "PROP_INSTRUCTION_SET_LOG": {
      "columns": {
        "PROP_INSTRUCTION_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PROP_INSTRUCTION_SET",
          "info": "Property Set GID "
        },
        "LOG_SEQUENCE_NUM": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Sequence of item within the log. "
        },
        "INSTRUCTION": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "values": [
            "SET",
            "REMOVE",
            "INCLUDE"
          ],
          "info": "Property instruction "
        },
        "KEY": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Property key. For INCLUDE, this is the Property Set GID. "
        },
        "VALUE": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Property value. For REMOVE, this can be set to a particular value of a multi-valued property to remove. Otherwise, it is left blank. For INCLUDE, it is blank. "
        },
        "PREVIOUS_VALUE": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Previous value of property prior to the instruction. "
        },
        "PREVIOUS_VALUE_SOURCE": {
          "type": "VARCHAR2(500)",
          "nullable": true,
          "info": "Source of property value prior to the instruction. This source is prefixed by: File, if it is from a property file; Set, if it is from a property set. "
        },
        "ACTION": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "values": [
            "ADD",
            "CHANGE",
            "REMOVE"
          ],
          "info": "Action taken to modify the property set: ADD - the instruction was added; CHANGE - the instruction was modified; REMOVE - the instruction was removed. "
        },
        "REASON": {
          "type": "VARCHAR2(2000)",
          "nullable": false,
          "info": "The reason for the property instruction modification."
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
