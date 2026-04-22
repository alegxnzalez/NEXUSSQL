// EQUIPMENT_REFERENCE_UNIT.js

window.EQUIPMENT_REFERENCE_UNIT = {
  "tables": {
    "EQUIPMENT_REFERENCE_UNIT": {
      "columns": {
        "EQUIPMENT_REFERENCE_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "EQUIPMENT_REFERENCE_UNIT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "EQUIPMENT_REFERENCE_UNIT_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
},
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
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
},
        "APPLICATION_RULE": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "values": [
                    "SAME",
                    "LIKE",
                    "MIXED"
          ]
},
        "ROUNDING_THRESHOLD": {
          "type": "NUMBER",
          "nullable": true,
          "info": "To signify the rounding threshold (between 0 and 1). Values equal to the threshold will be rounded down."
},
        "ROUNDING_GROUPING_LEVEL": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "values": [
                    "ORDER",
                    "LOCATION",
                    "ORDER PLAN TO"
          ],
          "info": "To indicate the grouping level for rounding. Values include: ORDER, LOCATION, ORDER PLAN TO."
},
        "IS_INDEPENDENT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates whether this ERU is independent of other ERU's. Default is N."
}
      },
      "fk_tables": [
        "ACTIVITY_TIME_DEF",
        "ALLOC_METHOD_DETAIL",
        "CAPACITY_COMMITMENT_ALLOC",
        "CONSOL",
        "CONSOL_GROUP",
        "EQUIP_GROUP_EQUIP_REF_UNIT",
        "LANE_SUMMARY_STAT",
        "LOGISTICS_GUIDE_TEMPLATE",
        "OBL_EQUIP_REF_UNIT_JOIN",
        "OBSU_EQUIP_REF_UNIT_JOIN",
        "ORL_EQUIP_REF_UNIT_JOIN",
        "PKG_ITEM_EQUIP_REF_UNIT_JOIN",
        "P_BID",
        "P_SHIPMENT",
        "P_SHIPMENT_SET",
        "SHIPMENT",
        "SHIPMENT_ORDER_RELEASE_JOIN",
        "SHIP_UNIT_EQUIP_REF_UNIT_JOIN",
        "S_SHIP_UNIT_EQUIP_REF_UNIT",
        "THU_EQUIP_REF_UNIT"
]
    }
  }
};