// LNM_DATARULE_PARAM.js

window.LNM_DATARULE_PARAM = {
  "tables": {
    "LNM_DATARULE_PARAM": {
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
        "DATARULE_DEFINITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LNM_DATARULE_DEF"
        },
        "PARAMETER_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true,
          "info": "Parameter name, unique within the rule. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "S",
            "B",
            "I",
            "N",
            "D",
            "G",
            "U",
            "C",
            "P",
            "L",
            "F",
            "Q",
            "T",
            "X",
            "Y",
            "Z",
            "R"
          ],
          "info": "Parameter type. This defines the various field types supported by the UI for parameter entry. Values are identical to those for REPORT_PARAMETER. "
        },
        "QUERY_TABLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "If the parameter type maps to a data lookup (e.g. a pick list), the query table holding the list GIDs. "
        },
        "COLUMN_NAME": {
          "type": "VARCHAR2(105)",
          "nullable": true,
          "info": "The column that is to be impacted by this data_rule_definition. "
        },
        "FIXED_VALUES": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "If the parameter type maps to a fixed drop list, a comma-delimited list of translation=value pairs. "
        },
        "IS_MANDATORY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Y, if the parameter is required. "
        },
        "DEFAULT_VALUE": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Default parameter value, if any. "
        },
        "IS_OPERAND_REQUIRED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Y, if the user can select from multiple operands for this parameter. "
        },
        "IS_VALUE_REQUIRED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Y, if the user must enter a value for this parameter."
        }
      },
      "fk_tables": [
        "LNM_DATARULE_INS_PRM",
        "LNM_DATARULE_PARAM_OP"
      ]
    }
  }
};
