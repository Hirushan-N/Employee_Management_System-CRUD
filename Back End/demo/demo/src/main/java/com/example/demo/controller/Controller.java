package com.example.demo.controller;

import com.example.demo.models.Employee;
import com.example.demo.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.source.InvalidConfigurationPropertyValueException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class Controller {

    @Autowired
    EmployeeRepository employeeRepo;

    //////////////////////////////////////////////////////////////////////////////////

    @GetMapping(path = "/all")
    public List<Employee> getAllDetails() {

        return  employeeRepo.findAll();

    }


    //insert
    @PostMapping(path = "/insert")
    void insertDetails(@RequestBody Employee employee)
    {
        employeeRepo.save(employee);

    }


    // delete student rest api
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable int id){
        Employee employee = employeeRepo.findById(id)
                .orElseThrow(() -> {
                    return new InvalidConfigurationPropertyValueException("Employee not exist " , employeeRepo,"");
                });

        employeeRepo.delete(employee);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


    // get student by id rest api
    @GetMapping("/find/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable int id) {
        Employee employee = employeeRepo.findById(id)
                .orElseThrow(() -> new InvalidConfigurationPropertyValueException("Employee not exist " , employeeRepo,""));
        return ResponseEntity.ok(employee);
    }

    // update student by id rest api
    @PutMapping("/update/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable int id, @RequestBody Employee employeeObject){
        Employee employee = employeeRepo.findById(id)
                .orElseThrow(() -> new InvalidConfigurationPropertyValueException("Employee not exist " , employeeRepo,""));

        employee.setName(employeeObject.getName());
        employee.setNic(employeeObject.getNic());
        employee.setAddress(employeeObject.getAddress());
        employee.setMobile(employeeObject.getMobile());
        employee.setTelephone(employeeObject.getTelephone());



        Employee updatedEmployee = employeeRepo.save(employee);
        return ResponseEntity.ok(updatedEmployee);
    }


}
