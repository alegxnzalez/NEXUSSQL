// PROP_INSTRUCTION.js

window.PROP_INSTRUCTION = {
  "tables": {
    "PROP_INSTRUCTION": {
      "description": "Property instruction",
      "columns": {
        "PROP_INSTRUCTION_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "PROP_INSTRUCTION_SET",
          "info": "Property Set GID"
},
        "PROP_SEQUENCE_NUM": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Sequence of instruction within the property set."
},
        "INSTRUCTION": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "values": [
                    "SET",
                    "REMOVE",
                    "INCLUDE"
          ],
          "info": "Instruction type: SET = set a single or multi-valued property; REMOVE = remove a property value; INCLUDE = include another property set"
},
        "KEY": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Property key. For INCLUDE, this is the Property Set GID being included."
},
        "VALUE": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Property Value. For REMOVE, this can be omitted. It should be set to remove a single value from a multi-valued proeprty. For INCLUDE, this is ignored."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Description of the property instruction"
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
},
        "IS_DYN_PASSWORD": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Y, if property represents a dynamically registered password."
}
      },
      "fk_tables": []
    }
  }
};