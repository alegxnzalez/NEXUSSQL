// EQUIPMENT_TYPE.js

window.EQUIPMENT_TYPE = {
  "tables": {
    "EQUIPMENT_TYPE": {
      "columns": {
        "EQUIPMENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the equipment type. Equipment Types are used to define the characteristics of an equipment group. Using Intermodal Trailers as an example of an equipment group profile, the group in that profile could be 45' or 48' trailers. The equipment type against that group would be either a rollup or swing door trailer. "
        },
        "EQUIPMENT_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the equipment type. "
        },
        "EQUIPMENT_TYPE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Text for the name of the equipment type. "
        },
        "EQUIPMENT_DESC": {
          "type": "VARCHAR2(60)",
          "nullable": true,
          "info": "A textual description of the equipment type. "
        },
        "EQUIPMENT_DESC_CODE": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "The equipment description code is a user-defined code for the equipment type description. "
        },
        "EQUIPMENT_DESC_CODE_DEF": {
          "type": "VARCHAR2(60)",
          "nullable": true,
          "info": "The equipment description code definition is a definition of the equipment type description code. "
        },
        "ISO_EQUIPMENT_CODE": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "This is the official International Standards Organization (ISO) code for the container that may be used with this equipment type (EDI element 24). This code identifies the size and type of container in a four-character format. The first and second characters specify the volume of the container, and the third and fourth characters specify the type. This code may or may not be the same as the equipment description code. "
        },
        "ISO_EQUIPMENT_CODE_DEF": {
          "type": "VARCHAR2(60)",
          "nullable": true,
          "info": "The ISO equipment code definition is an explanation of the ISO equipment code. "
        },
        "GROSS_WEIGHT": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The equipment type's gross weight. "
        },
        "GROSS_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "Unit of measure for GROSS_WEIGHT column. "
        },
        "GROSS_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The gross weight in base units. "
        },
        "TARE_WEIGHT": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Weight of the empty equipment type. "
        },
        "TARE_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "Unit of measure for the tare weight. "
        },
        "TARE_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The tare weight in base units. "
        },
        "NET_WEIGHT": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The net or nominal weight is the anticipated weight capacity of the shipment that can be contained within the equipment type. "
        },
        "NET_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "The unit of measure related to the net or nominal weight. "
        },
        "NET_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The net weight in base units. "
        },
        "VOLUME": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The volume of the equipment type. "
        },
        "VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "Unit of measure for VOLUME column. "
        },
        "VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The volume in base units. "
        },
        "METRIC3": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The Metric field represents an additional level of detail for a shipment on a given equipment type. For example, you can enter information about items being transported without packaging, such as a number of garments not packed into crates or onto pallets but instead placed on hangers. This number must be no greater than eight digits. "
        },
        "METRIC4": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The Metric field represents an additional level of detail for a shipment on a given equipment type. For example, you can enter information about items being transported without packaging, such as a number of garments not packed into crates or onto pallets but instead placed on hangers. This number must be no greater than eight digits. "
        },
        "INTERIOR_LENGTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The length of the equipment type's interior. "
        },
        "INTERIOR_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for INTERIOR_LENGTH column. "
        },
        "INTERIOR_LENGTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The interior length in base units. "
        },
        "INTERIOR_WIDTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The width of the equipment type's interior. "
        },
        "INTERIOR_WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for INTERIOR_WIDTH column. "
        },
        "INTERIOR_WIDTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The interior width in base units. "
        },
        "INTERIOR_HEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The height of the equipment type's interior. "
        },
        "INTERIOR_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for INTERIOR_HEIGHT column. "
        },
        "INTERIOR_HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The interior height in base units. "
        },
        "EXTERIOR_LENGTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The length of the exterior of the equipment type. "
        },
        "EXTERIOR_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for EXTERIOR_LENGTH column. "
        },
        "EXTERIOR_LENGTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The exterior length in base units. "
        },
        "EXTERIOR_WIDTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The width of the exterior of the equipment type. "
        },
        "EXTERIOR_WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for EXTERIOR_WIDTH column. "
        },
        "EXTERIOR_WIDTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The exterior width in base units. "
        },
        "EXTERIOR_HEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The height of the exterior of the equipment type. "
        },
        "EXTERIOR_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for EXTERIOR_HEIGHT column. "
        },
        "EXTERIOR_HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The exterior height in base units. "
        },
        "TEMPERATURE_CONTROL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Check box used to enable temperature control functionality to be used for this equipment type. "
        },
        "TEMPERATURE_CONTROL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TEMPERATURE_CONTROL",
          "info": "A GID to define the temperature controls value for the commodity. "
        },
        "TAG1": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Tag fields, like attribute fields, are available to store additional information associated with this piece of equipment. "
        },
        "TAG2": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Tag fields, like attribute fields, are available to store additional information associated with this piece of equipment. "
        },
        "TAG3": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Tag fields, like attribute fields, are available to store additional information associated with this piece of equipment. "
        },
        "TAG4": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Tag fields, like attribute fields, are available to store additional information associated with this piece of equipment. "
        },
        "SUBSTITUTE_EQ_TYPE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_TYPE_PROFILE",
          "info": "Indicates which equipment types can be substituted for this type in fleet equipment planning. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
        }
      },
      "fk_tables": [
        "AAR_CAR_EQUIP_TYPE_JOIN",
        "CAPACITY_COMMITMENT",
        "CAPACITY_LIMIT",
        "CAPACITY_USAGE",
        "DM_TRANSACTION",
        "EQUIPMENT",
        "EQUIPMENT_TYPE_JOIN",
        "EQUIPMENT_TYPE_PROFILE_D",
        "EQUIPMENT_TYPE_REMARK",
        "EQUIPMENT_TYPE_SPECIAL_SERVICE",
        "ESG_ACTIVITY",
        "IE_SS_S_EQUIPMENT",
        "ORDER_RELEASE",
        "OR_EQUIPMENT",
        "SERVPROV_TENDER_EQUIPMENT",
        "S_EQUIPMENT"
      ]
    }
  }
};
