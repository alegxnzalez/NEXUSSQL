// RELEASE_METHOD.js

window.RELEASE_METHOD = {
  "tables": {
    "RELEASE_METHOD": {
      "columns": {
        "RELEASE_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "RELEASE_METHOD_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "RELEASING_LOGIC": {
          "type": "VARCHAR2(5)",
          "nullable": false,
          "values": [
            "STHU",
            "STHUL",
            "DNTHU",
            "BBTHU"
          ]
        },
        "IS_INDIVIDUAL_THU_FORCED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_SPLITABLE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_MIXED_FREIGHT_THU_ALLOWED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "MIXED_FRT_VOL_TARGET_PCT_FULL": {
          "type": "NUMBER(3)",
          "nullable": false
        },
        "SINGLE_RELEASE_PER_INSTRUCTION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "PLAN_FROM_PLAN_TO_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "OVERRIDE SOURCE",
            "DEST",
            "POPULATE PLAN FROM",
            "TO"
          ]
        },
        "IS_BUFFERING_SUPPORTED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "PERFORM_SERVICE_TIME_LOOKUP": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "RATE_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_SERVICE"
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
        "OBLINE_NET_WEIGHT_CALC": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "ALWAYS",
            "NEVER",
            "IF_NULL"
          ],
          "info": "indicates whether or not this field should be calculated "
        },
        "OBLINE_NET_VOLUME_CALC": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "ALWAYS",
            "NEVER",
            "IF_NULL"
          ],
          "info": "indicates whether or not this field should be calculated "
        },
        "OBLINE_TOTAL_PKG_COUNT_CALC": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "ALWAYS",
            "NEVER",
            "IF_NULL"
          ],
          "info": "indicates whether or not this field should be calculated "
        },
        "OBLINE_PKG_UNIT_COUNT_CALC": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "ALWAYS",
            "IF_NULL"
          ],
          "info": "indicates whether or not this field should be calculated "
        },
        "OBSUL_TOTAL_WEIGHT_CALC": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "ALWAYS",
            "NEVER",
            "IF_NULL"
          ],
          "info": "indicates whether or not this field should be calculated "
        },
        "OBSUL_TOTAL_VOLUME_CALC": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "ALWAYS",
            "NEVER",
            "IF_NULL"
          ],
          "info": "indicates whether or not this field should be calculated "
        },
        "OBSUL_TOTAL_PKG_COUNT_CALC": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "ALWAYS",
            "NEVER",
            "IF_NULL"
          ],
          "info": "indicates whether or not this field should be calculated "
        },
        "OBSUL_PKG_UNIT_COUNT_CALC": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "ALWAYS",
            "IF_NULL"
          ],
          "info": "indicates whether or not this field should be calculated "
        },
        "ALLOW_OVER_RELEASING": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "over releasing configuration "
        },
        "OVER_RELEASE_CHECK_METRIC": {
          "type": "VARCHAR2(2)",
          "nullable": false,
          "values": [
            "W",
            "V",
            "C"
          ],
          "info": "metric to check when validating over releasing "
        },
        "SU_GROSS_WEIGHT_PER_CALC": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "ALWAYS",
            "NEVER",
            "IF_NULL"
          ],
          "info": "indicates whether or not this field should be calculated "
        },
        "SU_NET_WEIGHT_PER_CALC": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "ALWAYS",
            "NEVER",
            "IF_NULL"
          ],
          "info": "indicates whether or not this field should be calculated "
        },
        "SU_TOTAL_GROSS_WEIGHT_CALC": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "ALWAYS",
            "NEVER",
            "IF_NULL"
          ],
          "info": "indicates whether or not this field should be calculated "
        },
        "SU_GROSS_VOLUME_PER_CALC": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "ALWAYS",
            "NEVER",
            "IF_NULL"
          ],
          "info": "indicates whether or not this field should be calculated "
        },
        "SU_NET_VOLUME_PER_CALC": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "ALWAYS",
            "NEVER",
            "IF_NULL"
          ],
          "info": "indicates whether or not this field should be calculated "
        },
        "SU_TOTAL_GROSS_VOLUME_CALC": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "ALWAYS",
            "NEVER",
            "IF_NULL"
          ],
          "info": "indicates whether or not this field should be calculated "
        },
        "SUL_GROSS_WEIGHT_CALC": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "ALWAYS",
            "NEVER",
            "IF_NULL"
          ],
          "info": "indicates whether or not this field should be calculated "
        },
        "SUL_GROSS_VOLUME_CALC": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "ALWAYS",
            "NEVER",
            "IF_NULL"
          ],
          "info": "indicates whether or not this field should be calculated "
        },
        "SUL_TOTAL_PKG_COUNT_CALC": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "ALWAYS",
            "NEVER",
            "IF_NULL"
          ],
          "info": "indicates whether or not this field should be calculated "
        },
        "SUL_PKG_UNIT_COUNT_CALC": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "ALWAYS",
            "IF_NULL"
          ],
          "info": "indicates whether or not this field should be calculated "
        },
        "SU_GROSS_WEIGHT_PER_FORMULA": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "formula to be used to calculate field "
        },
        "SU_NET_WEIGHT_PER_FORMULA": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "formula to be used to calculate fiel "
        },
        "SU_TOTAL_GROSS_WEIGHT_FORMULA": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "formula to be used to calculate fiel "
        },
        "SU_GROSS_VOLUME_PER_FORMULA": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "formula to be used to calculate fiel "
        },
        "SU_NET_VOLUME_PER_FORMULA": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "formula to be used to calculate fiel "
        },
        "SU_TOTAL_GROSS_VOLUME_FORMULA": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "formula to be used to calculate fiel "
        },
        "ORDER_CREATE_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "L",
            "S"
          ],
          "info": "order bases and releases created by line (L) or ship unit (S) "
        },
        "SHIP_UNIT_CREATE_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "values": [
            "ON_CREATE",
            "USER_INITIATED"
          ],
          "info": "configures when ship units should be created "
        },
        "SHIP_UNIT_CALC_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "values": [
            "SU_TO_LINE",
            "LINE_TO_SU",
            "SU_IGNORE_LINES"
          ],
          "info": "indicates if orders entered by ship unit should push ship unit data to the lines or roll line data up to the ship units "
        },
        "IS_ALLOW_REPACK": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "REPACK_PERCENT_THRESHOLD": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TRANSPORT_HANDLING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC"
        },
        "IS_AGGREGATE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "To indicate if ob lines will be aggregated to or lines based on its category during releasing. "
        },
        "ORLINE_WEIGHT_CALC": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "ALWAYS",
            "NEVER",
            "IF_NULL"
          ],
          "info": "indicates whether or not this field should be calculated "
        },
        "ORLINE_VOLUME_CALC": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "values": [
            "ALWAYS",
            "NEVER",
            "IF_NULL"
          ],
          "info": "indicates whether or not this field should be calculated "
        },
        "IS_PACK_EACH_ITEM": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "When you select the releasing logic as One Ship Unit per Line, this checkbox is available on the Order Release tab of the line based Order Configuration. If this checkbox is selected, the package count on the order release line is set to the ship unit count on ship unit during ship unit building.\""
        }
      },
      "fk_tables": [
        "OB_ORDER_BASE",
        "ORDER_RELEASE",
        "S_SHIP_UNIT"
      ]
    }
  }
};
