// VEHICLE_TYPE_EQP_GRP_COMP.js

window.VEHICLE_TYPE_EQP_GRP_COMP = {
  "tables": {
    "VEHICLE_TYPE_EQP_GRP_COMP": {
      "columns": {
        "VEHICLE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "VEHICLE_TYPE",
          "info": "The GID for the vehicle type. Vehicle type generally refers to the type of equipment (aircraft) that will be linked to an air schedule. Vehicle types contain door height and width dimensions that must be added to the equipment group so that ship units assigned to that equipment group can fit through the door when they are loaded onto the plane. For example, you can create a ship unit with dimensions of 10 feet in height by 10 feet in width. You can then assign that ship unit to an equipment group. If you create a vehicle type and assign it to that equipment group, then the vehicle type's door dimensions must be larger than those of the ship unit (for example, 20 feet in height and 20 feet in width).\nIf these door dimensions are not larger than the ship unit dimensions and the equipment group is assigned to a shipment, shipment planning produces an infeasible shipment with this equipment group.\nIf you setup your vehicle types without any equipment groups, the system will check the ship unit against door dimensions on the vehicle type \"loose freight\" scenario.\nIf you make an association between the vehicle type and an equipment group, then the system no longer does the door dimension check, but does a check to see if the equipment group assigned to the shipment is compatible with the equipment group(s) associated with the vehicle type. "
        },
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EQUIPMENT_GROUP",
          "info": "The equipment group related to the vehicle type.  Note: You must create a vehicle type and assign it to an equipment group to use that equipment group for air transport. "
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
      "fk_tables": []
    }
  }
};
